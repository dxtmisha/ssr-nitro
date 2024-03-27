import content from "../../content";

export default eventHandler(async (event) => {
    const path = `http://test.bprp.ru${event.path}`

    if (event.path.match(/\.[a-z]{2,4}$/)) {
        const file = await fetch(path)

        return new Response(file.body, {
            headers: file.headers
        })
    }

    const file = await $fetch(path)

    return content({
        title: '',
        project: '',
        file
    })
});
