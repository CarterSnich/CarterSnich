(async () => {
  const req = await fetch('https://api.github.com/users/CarterSnich/repos')
  const repos = await req.json()
  console.log(repos[0])

  const small = document.querySelector('small')
  small.innerText = `[${repos.length}]`

  const ul = document.querySelector("ul")
  for (let repo of repos) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = repo.html_url
    a.innerText = repo.name
    li.append(a)
    if (repo.description) {
      const span = document.createElement("span")
      span.innerText = ` - ${repo.description}`
      li.append(span)
    }

    ul.append(li)
  }

})

const { createApp, ref } = Vue
createApp({
  setup() {
    const repos = ref(null)

    fetch('https://api.github.com/users/CarterSnich/repos')
    	.then(res => res.json())
    	.then(data => repos.value = data)

    return {
			repos
    }
  }
}).mount('#app')