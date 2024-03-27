import layout from '../public/layout/index'

export default async function content({
                                          title = 'Title',
                                          project = 'app-project',
                                          file = ''
                                      }: {
    title: string
    project: string
    file: string
}) {
    const isFull = file.match(/<!doctype html>/i) &&
        file.match(/<body>[\S\s]+<\/body>/i)

    if (isFull) {
        title = file.match(/(?<=<title>)(.*?)(?=<\/title>)/i)?.[0] ?? title

        file = file.replace(/<!doctype html>/i, '')
        file = file.replace(/<\/?(html|head|meta|body)([^>]*|)>/ig, '')
        file = file.replace(/<title>(.*?)<\/title>/ig, '')
    }

    const html: string[] = [
        '<!doctype html>',
        '<html lang="en">',
        '<head>',
        '<meta charset="UTF-8" />',
        '<link rel="stylesheet" crossorigin href="/ui/assets/library.css">',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
        `<title>${title}</title>`,
        '</head>',
        '<body>',
        '<div id="ui-app-mutation"></div>',
        '<div id="app-header"></div>'
    ]

    if (isFull) {
        html.push(`<div id="${project}">${file}</div>`)
    } else {
        html.push(`<div id="${project}"></div>`, file)
    }

    html.push(
        '<div id="app-footer"></div>',
        layout,
        '</body>',
        '</html>'
    )

    return html.join('')
}
