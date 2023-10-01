export function download(url: string, name: string) {
  if (!url) {
    throw new Error('Resource URL not provided! You need to provide one')
  }
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobURL
      a.style.display = 'none'

      if (name && name.length) a.download = name
      document.body.appendChild(a)
      a.click()
    })
}
