<template>
	<div>
		<h2>Настройка Pop!_OS (Ubuntu)</h2>

		<div class="content">
			<terminal-line
				v-for="block in blocks"
				:key="block.title"
				:title="block.title"
				:lines="block.lines"
			></terminal-line>
		</div>
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
					title: 'Первоначальная настройка',
					lines: [
						'sudo apt-get update',
						'sudo apt-get upgrade',
						'sudo apt install telegram-desktop docker docker-compose steam filezilla discord golang vscodium-bin',
						'sudo apt install flatpak',
						'flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo'
					]
				},
				{
					title: 'ZSH',
					lines: ['sudo apt install zsh','sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"']
				},
				{
					title: 'NVM',
					lines: [
						'curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash ',
						'source ~/.bashrc'
					]
				},
				{
					title: 'Touchegg',
					lines: [
						'sudo add-apt-repository ppa:touchegg/stable',
						'sudo apt update',
						'sudo apt install touchegg',
						'sudo apt install touche'
					]
				},
				{
					title: 'Alias',
					lines: [
						'sudo nano .zshrc',
						'alias vpn="sudo openfortivpn -c /etc/openfortivpn/my_config" ',
						'alias sshdev="ssh popov@172.16.31.17"',
						'alias sshprod="ssh popov@172.16.31.16"',
						'alias ll="ls -la"',
						'alias arm="cd projects/arm-content && code . && cd frontside && npm run serve"',
						'alias update="sudo apt update"',
						'alias upgrade="sudo apt upgrade"'
					]
				},
				{
					title: 'Установка .deb пакетов',
					lines: ['sudo apt install < PackageName >']
				},
				{
					title: 'Ссылки для скачивания пакетов',
					lines: [
						'https://github.com/balena-io/etcher/releases/',
						'https://dbeaver.io/download/',
					]
				},
				{
					title: 'Настройки клавиатуры ARDOR',
					lines: [
						'sudo nano /etc/modprobe.d/hid_apple.conf',
						'options hid_apple fnmode=2'
					]
				}
			]
		}
	}
}
</script>