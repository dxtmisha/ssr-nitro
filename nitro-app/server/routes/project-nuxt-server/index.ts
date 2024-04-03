import content from "../../content";

export default eventHandler(async (event) => {
    const path = `http://test.bprp.ru/project-nuxt-server/`
    const file = await $fetch<string>(path)
    getQuery()

    return content({
        title: '',
        project: '',
        file
    })
});
