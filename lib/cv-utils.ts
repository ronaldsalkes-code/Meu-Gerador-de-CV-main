// Utilities for CV management
import { DadosCV, DADOS_INICIAIS } from './cv-types'

const STORAGE_KEY = 'cv_premium_data'

export const salvarDadosCV = (dados: DadosCV): boolean => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados))
    return true
  } catch (error) {
    console.error('Erro ao salvar dados:', error)
    return false
  }
}

export const carregarDadosCV = (): DadosCV => {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY)
    if (!salvo) return DADOS_INICIAIS
    
    const dados = JSON.parse(salvo) as DadosCV
    // Validar estrutura básica
    return Object.keys(DADOS_INICIAIS).every(key => key in dados) 
      ? dados 
      : DADOS_INICIAIS
  } catch (error) {
    console.error('Erro ao carregar dados:', error)
    return DADOS_INICIAIS
  }
}

export const limparDadosCV = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Erro ao limpar dados:', error)
  }
}

export const gerarNomeArquivoPDF = (nome: string): string => {
  const dataAtual = new Date().toISOString().slice(0, 10)
  return `CV-${nome.replace(/\s+/g, '-')}-${dataAtual}.pdf`
}
