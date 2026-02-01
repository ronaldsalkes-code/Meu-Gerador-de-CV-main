// Configuration constants

export const APP_CONFIG = {
  APP_NAME: 'CV MASTER PRO',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  
  // Payment configuration
  PAYMENT: {
    LINK_PIX: 'https://lastlink.com/p/C462F9E2A/checkout-payment/',
    PRICE: 'R$ 5,99',
    DESCRIPTION: 'Pagamento único • Sem mensalidades'
  },
  
  // Validation rules
  VALIDATION: {
    MIN_RESUMO_LENGTH: 50,
    MAX_RESUMO_LENGTH: 500,
    MIN_SKILLS_COUNT: 1,
    REQUIRED_FIELDS_ETAPA_1: ['nome', 'cargo'],
    REQUIRED_FIELDS_ETAPA_2: ['email', 'tel', 'cidade'],
    REQUIRED_FIELDS_ETAPA_4: ['resumo'],
    REQUIRED_FIELDS_ETAPA_5: ['exp'],
    REQUIRED_FIELDS_ETAPA_6: ['estudos'],
    REQUIRED_FIELDS_ETAPA_7: ['skills']
  },
  
  // UI Configuration
  UI: {
    TOTAL_STEPS: 11,
    STEPS_WITH_VALIDATION: [1, 2, 4, 5, 6, 7]
  }
}
