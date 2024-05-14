<template>
	<div>
		<h2>Настройка Manjaro (Arch)</h2>

		<div class="content">
			<terminal-line
				v-for="block in blocks"
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
					title: 'ZSH',
					lines: [
						'yay -S zsh',
						'sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"',
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
					lines: ['yay -S neofetch steam gamemode discord filezilla telegram-desktop go docker docker-compose etcher vlc diodon transmission-qt wine godot gimp inkscape blender mangohud goverlay']
				},
				{
					title: 'Настройки клавиатуры ARDOR',
					lines: [
						'sudo nano /etc/modprobe.d/hid_apple.conf',
						'options hid_apple fnmode=2',
						'echo 2 | sudo tee /sys/module/hid_apple/parameters/fnmode'
					]
				},
				{
					title: 'Настройки клавиатуры ARDOR - автозапуск скрипта',
					lines: [
						'sudo nano ardor.sh',
						`#!/bin/bash
						echo 2 | sudo tee /sys/module/hid_apple/parameters/fnmode`,
						'sudo nano /etc/systemd/system/myscript.service',
						`[Unit]
							Description=Opendchub service
							After=network.target
							[Service]
							ExecStart=/etc/init.d/odchub
							[Install]
							WantedBy=multi-user.target`,
						'sudo systemctl start myscript',
						'sudo systemctl enable myscript'
					]
				},
				{
					title: 'Настройка иконок',
					lines: [
						'sudo cp -r IconFolder /usr/share/icons/',
					]
				},
				{
					title: 'Расширения',
					lines: [
						'blur my shell',
						'dash2dock animated',
						'vitals',
					]
				},
				{
					title: 'Если отвалился bluetooth',
					lines: [
						'sudo modprobe -r btusb',
						'sudo systemctl restart bluetooth',
						'sudo modprobe btusb',
					]
				},
				
			],

			blockArea: [
				{
					title: 'Расширения',
					lines: [
						'blur my shell',
						'dash2dock animated',
						'vitals',
					]
				},
			]
		}
	}
}
</script>