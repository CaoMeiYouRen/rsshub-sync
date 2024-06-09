import fs from 'fs-extra'

async function start() {
    const text = `\`\`\`\n${process.env.DOCKER_TAGS}\n\`\`\``
    const readme = await fs.readFile('README.md', 'utf-8')
    const newReadme = readme.replace(/<!-- DOCKER_START -->([\s\S]*?)<!-- DOCKER_END -->/, `<!-- DOCKER_START -->\n${text}\n<!-- DOCKER_END -->`)
    await fs.writeFile('README.md', newReadme)
    console.log('更新 Docker Tags 成功')
}

start()
