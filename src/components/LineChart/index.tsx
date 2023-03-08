import { useEffect, useRef, useState, Fragment } from 'react'
import { useTheme } from 'styled-components'

import { Container, Legend, Grid } from './styles'

interface ChartDimensionsType {
  width: number
  height: number
}

interface LineChartProps {
  data: number[]
}

export function LineChart({ data }: LineChartProps) {
  const [chartDimensions, setChartDimensions] = useState<ChartDimensionsType>({
    width: 0,
    height: 0,
  })

  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  const labels = calculateKeyLabels()

  const chartCoordinates = data.map((value, index) => {
    return {
      x: calculateXPosition(index),
      y: calculateYPosition(value),
    }
  })

  const closingVertices = findClosingVertices()

  const polygonCoordinates = [...chartCoordinates, ...closingVertices]

  const polygonPoints = polygonCoordinates
    .map((coordinate) => `${coordinate.x},${coordinate.y}`)
    .join(' ')

  function obtainMaxAndMinValues() {
    return {
      maxValue: Math.max(...data),
      minValue: Math.min(...data),
    }
  }

  function calculateKeyLabels() {
    const { maxValue, minValue } = obtainMaxAndMinValues()
    const step = (maxValue - minValue) / 3
    const fixedDecimals = step < 0.009 ? 3 : step < 0.09 ? 2 : 1

    const keyLabels = [maxValue, maxValue - step, minValue + step, minValue]
    return keyLabels.map((label) => label.toFixed(fixedDecimals))
  }

  function calculateXPosition(index: number): number {
    return (chartDimensions.width * index) / (data.length - 1)
  }

  function calculateYPosition(value: number): number {
    const { maxValue, minValue } = obtainMaxAndMinValues()

    return (
      chartDimensions.height -
      ((value - minValue) / (maxValue - minValue)) * chartDimensions.height
    )
  }

  function findClosingVertices() {
    const firstValue = data[0]
    const lastValue = data[data.length - 1]

    return [
      {
        x: chartDimensions.width,
        y: calculateYPosition(lastValue),
      },
      {
        x: chartDimensions.width,
        y: chartDimensions.height,
      },
      {
        x: 0,
        y: chartDimensions.height,
      },
      {
        x: 0,
        y: calculateYPosition(firstValue),
      },
    ]
  }

  function buildChartLine(value: number, index: number) {
    const currentPointX = calculateXPosition(index)
    const currentPointY = calculateYPosition(value)
    const previousPointX =
      index > 0 ? calculateXPosition(index - 1) : currentPointX
    const previousPointY =
      index > 0 ? calculateYPosition(data[index - 1]) : currentPointY

    return (
      <Fragment key={currentPointX + currentPointY + index}>
        <line
          x1={previousPointX}
          x2={currentPointX}
          y1={previousPointY}
          y2={currentPointY}
        />
        <circle cx={currentPointX} cy={currentPointY} r="0.4rem" />
      </Fragment>
    )
  }

  useEffect(() => {
    function handleResize() {
      if (!ref.current) {
        return
      }

      const { clientWidth: width, clientHeight: height } = ref.current
      setChartDimensions({ width, height })
    }

    window.addEventListener('resize', handleResize)
    setTimeout(handleResize, 200)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!data || !data.length) {
    return <></>
  }

  return (
    <Container>
      <Legend>
        {labels.map((label) => {
          return <span key={label}>{label}</span>
        })}
      </Legend>
      <Grid ref={ref}>
        {labels.map((label) => (
          <div key={label}></div>
        ))}
        <svg width={chartDimensions.width} height={chartDimensions.height}>
          <defs>
            <linearGradient id="chart-gradient" gradientTransform="rotate(90)">
              <stop
                offset="21.15%"
                stopColor={theme['chart-gradient-first-color']}
              />
              <stop
                offset="100%"
                stopColor={theme['chart-gradient-second-color']}
              />
            </linearGradient>
          </defs>
          <polygon points={polygonPoints} />
          {data.map(buildChartLine)}
        </svg>
      </Grid>
    </Container>
  )
}
