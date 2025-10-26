import FormModal from './FormModal'

interface ContactModalProps {
  children: React.ReactNode
  className?: string
}

const CONTACT_FORM_URL = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=X5B4nXtJyUe8_Q47cbEk1vTkiwwqi3NAhP4Sm3GUiQpUQkJQMkpMQzJJMloyVFE0UjNXMjdRS1BRUi4u&embed=true'

export default function ContactModal({ children, className }: ContactModalProps) {
  return (
    <FormModal
      title="Contact Us"
      formUrl={CONTACT_FORM_URL}
      className={className}
    >
      {children}
    </FormModal>
  )
}
