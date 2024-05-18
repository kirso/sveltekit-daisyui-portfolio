import type {PageServerLoad} from '../../Users/kirso/Code/sveltekit-portfolio/src/routes/$types'

export const load: PageServerLoad = async () => {
	const pets = [
		{
			name: 'Rex',
		},
		{name: 'Scooby'},
		{name: 'Snoopy'},
		{name: 'Toto'},
		{name: 'Tweety'},
		{name: 'Wally'},
		{name: 'Woody'},
		{name: 'Zazu'},
		{name: 'Ziggy'},
		{name: 'Zoe'},
	]

	return {pets}
}
