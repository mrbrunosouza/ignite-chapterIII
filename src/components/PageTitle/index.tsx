import { Heading } from "@chakra-ui/react";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Heading size="lg" fontWeight="normal">{title}</Heading>
  )
}