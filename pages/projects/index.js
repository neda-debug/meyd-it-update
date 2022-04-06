export async function getServerSideProps ({ query }) {
	console.table(query)
	return { props: { test: 'Yo' } }
}
