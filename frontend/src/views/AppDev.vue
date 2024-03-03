<template>
	<div>
		<h2>Настройка инструкментов разработки</h2>

		<div class="content">
			<terminal-line
				v-for="block in blocksLine"
				:key="block.title"
				:title="block.title"
				:lines="block.lines"
			></terminal-line>

			<terminal-area
				v-for="block in blocksArea"
				:key="block.title"
				:title="block.title"
				:lines="block.lines"
			></terminal-area>
		</div>
	</div>
</template>

<script>
import TerminalLine from '@/components/TerminalLine.vue'
import TerminalArea from '../components/TerminalArea.vue'

export default {
	components: { TerminalLine, TerminalArea },

	data() {
		return {
			blocksLine: [
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
					title: 'VSCodium пакеты',
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
			],
			blocksArea: [
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