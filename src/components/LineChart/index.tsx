import { useEffect, useRef, useState, Fragment } from 'react'
import { useTheme } from 'styled-components'

import { Container, Legend, Grid } from './styles'

interface ChartDimensionsType {
  width: number
  height: number
}

export function LineChart() {
  const [chartDimensions, setChartDimensions] = useState<ChartDimensionsType>({
    width: 0,
    height: 0,
  })

  const ref = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  const series = [
    5.17, 5.25, 5.16, 5.14, 5.18, 5.08, 5.09, 5.05, 5.12, 5.26, 5.23, 5.21,
    5.07, 5.29, 5.27, 5.13, 5.14, 5.3, 5.19, 5,
  ]

  const labels = calculateKeyLabels()

  const chartCoordinates = series.map((value, index) => {
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
      maxValue: Math.max(...series),
      minValue: Math.min(...series),
    }
  }

  function calculateKeyLabels() {
    const { maxValue, minValue } = obtainMaxAndMinValues()
    const step = (maxValue - minValue) / 3
    const fixedDecimals = step < 0.09 ? 2 : 1

    const keyLabels = [maxValue, maxValue - step, minValue + step, minValue]
    return keyLabels.map((label) => label.toFixed(fixedDecimals))
  }

  function calculateXPosition(index: number): number {
    return (chartDimensions.width * index) / (series.length - 1)
  }

  function calculateYPosition(value: number): number {
    const { maxValue, minValue } = obtainMaxAndMinValues()

    return (
      chartDimensions.height -
      ((value - minValue) / (maxValue - minValue)) * chartDimensions.height
    )
  }

  function findClosingVertices() {
    const firstValue = series[0]
    const lastValue = series[series.length - 1]

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
      index > 0 ? calculateYPosition(series[index - 1]) : currentPointY

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
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Container>
      <Legend>
        {labels.map((label) => {
          return <span key={label}>{label}</span>
        })}
      </Legend>
      <Grid ref={ref}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
          {series.map(buildChartLine)}
        </svg>
      </Grid>
    </Container>
  )
}
