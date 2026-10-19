// =====================================================================
// DADOS DEMONSTRATIVOS — todos os valores abaixo são EXEMPLOS fictícios.
// Substitua pelas informações reais da academia antes de publicar.
// =====================================================================

export const siteInfo = {
  name: 'Power Fit',
  navLinks: [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Contato', href: '#contato' },
  ],
}

// Imagens de exemplo (SVG). Troque por fotos reais em public/images/.
export const images = {
  hero: '/images/hero.jpg',
  musculacao: '/images/musculacao.jpg',
  cardio: '/images/cardio.jpg',
  funcional: '/images/funcional.jpg',
  vestiarios: '/images/vestiarios.jpg',
  orientacao: '/images/orientacao.jpg',
}

export const plans = [
  { id: 'mensal', name: 'Plano Mensal', price: 'R$ 99,90', period: '/mês', highlight: 'Ideal para quem deseja começar.', featured: false },
  { id: 'trimestral', name: 'Plano Trimestral', price: 'R$ 89,90', period: '/mês', highlight: 'Melhor opção para quem busca consistência.', featured: true },
  { id: 'anual', name: 'Plano Anual', price: 'R$ 79,90', period: '/mês', highlight: 'Condições especiais para contratos de longa duração.', featured: false },
]

// Itens comuns a todos os planos
export const planFeatures = [
  'Acesso à academia conforme as regras do plano',
  'Equipamentos de musculação e cardio',
]

export const schedule = [
  { day: 'Segunda a sexta', hours: '06:00 – 22:00', special: false },
  { day: 'Sábado', hours: '08:00 – 14:00', special: true },
  { day: 'Domingo', hours: '09:00 – 12:00', special: true },
  { day: 'Feriados', hours: '09:00 – 12:00', special: true },
]

export const structure = [
  { title: 'Área de musculação', icon: 'Dumbbell', image: 'musculacao', alt: 'Área de musculação com equipamentos de treino de força', text: 'Espaço dedicado ao treino de força, com equipamentos para todos os níveis.' },
  { title: 'Cardio', icon: 'HeartPulse', image: 'cardio', alt: 'Equipamentos de cardio alinhados na área de condicionamento', text: 'Equipamentos para exercícios cardiovasculares e condicionamento.' },
  { title: 'Treino funcional', icon: 'Zap', image: 'funcional', alt: 'Espaço aberto para treino funcional', text: 'Área livre para circuitos, mobilidade e treinos dinâmicos.' },
  { title: 'Vestiários e apoio', icon: 'ShowerHead', image: 'vestiarios', alt: 'Vestiário com armários e áreas de apoio', text: 'Vestiários e áreas de apoio para o seu conforto antes e depois do treino.' },
  { title: 'Orientação profissional', icon: 'UserCheck', image: 'orientacao', alt: 'Instrutor orientando aluno durante o treino', text: 'Acompanhamento e orientação de profissionais (a confirmar com a academia).' },
]

export const contactInfo = {
  phone: '(00) 0000-0000',
  whatsapp: '(00) 00000-0000',
  // Somente dígitos com DDI+DDD (ex.: 5547999999999). Vazio = sem link do WhatsApp.
  whatsappDigits: '',
  address: 'Rua Exemplo, 123 – Bairro Exemplo, Cidade/UF',
  serviceHours: 'Segunda a sexta, das 08:00 às 20:00',
  socials: [
    { label: 'Instagram', href: '#contato' },
    { label: 'Facebook', href: '#contato' },
    { label: 'YouTube', href: '#contato' },
  ],
}
