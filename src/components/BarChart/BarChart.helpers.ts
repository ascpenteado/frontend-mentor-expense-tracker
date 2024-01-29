import { Chart } from 'chart.js/auto'
import type { Expense } from '../../types/expenses.types'

const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

const COLOR_TODAY = '#75b6bd'
const COLOR_OTHER = '#ec775f'
const COLOR_TODAY_HOVER = '#B4E0E5'
const COLOR_OTHER_HOVER = '#FF9B86'

function getZeroedDate(dateString: string | number | Date) {
  return new Date(dateString).setHours(0, 0, 0, 0)
}

const generateBarsColors = (expenses: Expense[]) =>
  expenses.map((item) => {
    const date = getZeroedDate(item.date)
    const today = getZeroedDate(new Date())
    return date === today ? COLOR_TODAY : COLOR_OTHER
  })

const generateBarsHoverColors = (expenses: Expense[]) =>
  expenses.map((item) => {
    const date = getZeroedDate(item.date)
    const today = getZeroedDate(new Date())
    return date === today ? COLOR_TODAY_HOVER : COLOR_OTHER_HOVER
  })

export const renderBarChart = (expenses: Expense[], expensesRef: HTMLCanvasElement) => {
  new Chart(expensesRef, {
    type: 'bar',
    data: {
      labels: weekDays,
      datasets: [
        {
          data: expenses.map((item) => item.amount),
          borderRadius: 5,
          borderSkipped: false,
          backgroundColor: [...generateBarsColors(expenses)],
          hoverBackgroundColor: [...generateBarsHoverColors(expenses)]
        }
      ]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          display: false
        }
      },

      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            title: () => '',
            label: function (context) {
              let label = context.dataset.label || ''
              if (label) {
                label += ': '
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y)
              }
              return label
            }
          },
          padding: 8,
          backgroundColor: '#382314',
          bodyFont: {
            size: 18,
            weight: 'bold'
          },
          bodyColor: '#fff',
          displayColors: false
        },
        legend: {
          display: false
        }
      }
    }
  })
}
