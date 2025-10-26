import FormModal from './FormModal'

interface FormButtonProps {
  children: React.ReactNode
  className?: string
}

const PRODUCT_SERVICE_FORM_URL = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=X5B4nXtJyUe8_Q47cbEk1vTkiwwqi3NAhP4Sm3GUiQpUM1g3UTdZQkc5SERWSFdNUjdLMjEwOU9SVS4u&embed=true'

export default function FormButton({ children, className }: FormButtonProps) {
  return (
    <FormModal
      title="Product & Service Inquiry"
      formUrl={PRODUCT_SERVICE_FORM_URL}
      className={className}
    >
      {children}
    </FormModal>
  )
}
