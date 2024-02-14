<template>
	<h2>Настройка Manjaro (Arch)</h2>

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
					title: 'YAY',
					lines: ['sudo pacman -S yay']
				},
				{
					title: 'Альтернативный YAY',
					lines: ['pacman -S --needed git base-devel','git clone https://aur.archlinux.org/yay.git','cd yay && makepkg -si']
				},
				{
					title: 'NVM',
					lines: [
						'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash',
						'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"',
						'[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"',
						'Reopen your terminal'
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
					]
				},
				{
					title: 'Установка пакетов',
					lines: ['yay -S steam gamemode calibre vscodium-bin discord filezilla telegram-desktop go docker docker-compose etcher vlc diodon']
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