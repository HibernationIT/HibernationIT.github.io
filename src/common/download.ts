export async function download(file: string, name: string) {
  const response = await fetch(`./${file}`)
  const blob = await response.blob()
  const downloadUrl = window.URL.createObjectURL(blob)

  const anchorElement = document.createElement('a')
  document.body.appendChild(anchorElement)
  anchorElement.download = name
  anchorElement.href = downloadUrl

  anchorElement.click()

  document.body.removeChild(anchorElement)
  window.URL.revokeObjectURL(downloadUrl)
}
