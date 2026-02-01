// Types for CV
export interface DadosCV {
  nome: string
  cargo: string
  tel: string
  email: string
  cidade: string
  linkedin: string
  resumo: string
  exp: string
  estudos: string
  skills: string
  cursos: string
  idiomas: string
  cnh: string
  disponibilidade: string
  vagaTexto: string
}

export interface Validacao {
  valido: boolean
  mensagem?: string
}

export const ETAPAS_LABELS = [
  'Bem-vindo',
  'Dados Pessoais',
  'Contatos',
  'Descrição da Vaga',
  'Resumo',
  'Experiência',
  'Formação',
  'Habilidades',
  'Cursos',
  'Idiomas',
  'Disponibilidade'
]

export const DADOS_INICIAIS: DadosCV = {
  nome: '',
  cargo: '',
  tel: '',
  email: '',
  cidade: '',
  linkedin: '',
  resumo: '',
  exp: '',
  estudos: '',
  skills: '',
  cursos: '',
  idiomas: '',
  cnh: 'Não Possuo',
  disponibilidade: '',
  vagaTexto: ''
}

export const validarEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const validarTelefone = (tel: string): boolean => {
  return /^[\d\s\-\(\)\+]*$/.test(tel) && tel.replace(/\D/g, '').length >= 10
}
