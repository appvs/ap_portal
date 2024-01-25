<template>
	<h2>Настройка инструкментов разработки</h2>

	<div class="content">
		<terminal-line
			v-for="block in blocks"
			:key="block.title"
			:title="block.title"
			:lines="block.lines"
		></terminal-line>
	</div>
</template>

<script>
import TerminalLine from '@/components/TerminalLine.vue'

export default {
	components: {TerminalLine},
	data() {
		return {
			blocks: [
				{
					title: 'Docker',
					lines: [
						'systemctl start docker',
						'systemctl enable docker',
						'sudo groupadd docker',
						'sudo usermod -aG docker ${USER}',
					]
				},
				
				{
					title: 'VSCode пакеты',
					lines: [
						'Docker',
						'GitLens',
						'Go',
						'indent-rainbow',
						'Material Icon Theme',
						'Bracket Pair Colorizer',
						'Cobalt2 Theme Official',
						'Vetur',
						'Open Remote SSH',
						'PHP Intelephense'
					]
				},
				{
					title: 'VSCode -> Settings(JSON)',
					lines: [
						'"editor.formatOnSave": true,',
						'"editor.tabSize": 4,',
						'"editor.insertSpaces": false,',
						'"editor.detectIndentation": false,',
						'"terminal.integrated.cursorStyle": "line",',
						'"explorer.confirmDelete": false,',
						'"workbench.editor.enablePreview": false,',
						'"vetur.format.enable": false,',
					]
				}
			]
		}
	}
}
</script>