import { Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'

interface DashboardProps {
  children: string;
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options  = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: [
      '18 Mar',
      '19 Mar',
      '20 Mar',
      '21 Mar',
      '22 Mar',
      '23 Mar',
      '24 Mar'
    ],
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
];

export function DashboardItem({ children }: DashboardProps) {
  return (
    <Box
      p={["6", "8"]}
      bg="gray.800"
      borderRadius={8}
      pb="4"
    >
      <Text fontSize="lg" mb="4">{children}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  )
}