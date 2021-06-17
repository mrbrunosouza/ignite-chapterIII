import { Flex, SimpleGrid } from "@chakra-ui/react";
import { DashboardItem } from "../components/DashboardItem";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";



export default function Dashboard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <DashboardItem>
            Inscritos da semana
          </DashboardItem>
          <DashboardItem>
            Taxa de Abertura
          </DashboardItem>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}