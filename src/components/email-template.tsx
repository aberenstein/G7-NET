import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

interface ContactFormEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactFormEmail = ({
  name = "John Doe",
  email = "john@example.com",
  subject = "Consulta sobre servicios",
  message = "Me gustaría obtener más información sobre sus servicios de desarrollo web y aplicaciones móviles.",
}: ContactFormEmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>Nueva consulta de contacto de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Heading style={heading}>Nueva consulta de contacto</Heading>
            <Text style={text}>
              Has recibido una nueva consulta a través del formulario de
              contacto de tu sitio web.
            </Text>

            <Section style={infoSection}>
              <Row style={infoRow}>
                <Column style={infoLabel}>Nombre:</Column>
                <Column style={infoValue}>{name}</Column>
              </Row>
              <Row style={infoRow}>
                <Column style={infoLabel}>Email:</Column>
                <Column style={infoValue}>
                  <Link
                    href={`mailto:${email}`}
                    style={{ ...link, color: "#48b4e8" }}
                  >
                    {email}
                  </Link>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={infoLabel}>Asunto:</Column>
                <Column style={infoValue}>{subject}</Column>
              </Row>
            </Section>

            <Section style={messageSection}>
              <Text style={messageSectionTitle}>Mensaje:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href={`mailto:${email}`}
                className="px-4 py-2"
              >
                Responder
              </Button>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactFormEmail

// Estilos
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
}

const content = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "4px",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  margin: "0 0 20px",
}

const text = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "24px",
  margin: "0 0 10px",
}

const infoSection = {
  margin: "20px 0",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "4px",
}

const infoRow = {
  margin: "10px 0",
}

const infoLabel = {
  width: "30%",
  fontWeight: "bold",
  color: "#555",
}

const infoValue = {
  width: "70%",
}

const messageSection = {
  margin: "20px 0",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "4px",
}

const messageSectionTitle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#555",
  margin: "0 0 10px",
}

const messageText = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-line",
}

const buttonContainer = {
  margin: "30px 0",
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#48b4e8",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
}

const link = {
  textDecoration: "none",
}
