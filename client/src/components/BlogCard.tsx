import { Card, type CardProps } from "@/components/Card";

export const blogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath='blog' />
);
