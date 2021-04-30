import axios from 'axios'
import { ref } from 'vue'

export default function clientFunctions() {
	let status = ref(false)

	function getStatus() {
		axios.get('/api/status')
			.then( result => {
				if (result.status === 200) status.value = true
			},
			error => {
				status.value = false
			}
		)
	}
	return { getStatus, status }
}