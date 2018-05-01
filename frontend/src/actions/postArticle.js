
export function filterBy(title, body, owner, category, id){
	return {
    	type: 'ADDARTICLE',
      	title,
        body,
        owner,
        category,
        id
    }
}
