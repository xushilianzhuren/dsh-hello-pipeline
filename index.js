/** dsh-hello-pipeline · 流水线实测件（发完即退役·验证全链用） */
export const name = 'hello-pipeline'
export const inject = ['systemPrompt']
const SECTION = 'hello-pipeline:ping'
export default function plugin(ctx) {
  const cfg = (ctx.config?.[SECTION]) ?? {}
  if (cfg.enabled === false) return
  ctx.registerSection?.({
    name: SECTION, order: 999,
    render: () => '## Hello Pipeline · 流水线实测件在位（可在设置关闭）'
  })
  ctx.logger?.info?.('dsh-hello-pipeline: registered')
}
