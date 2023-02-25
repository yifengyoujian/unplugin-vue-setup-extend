import { describe, expect, it } from 'vitest'
import { compileScript, parse } from '../src/core/compiler'

describe('compiler', () => {
    it('Ordinary parse', async () => {
        const code = `<script setup name="App"></script>`
        expect(parse(code).descriptor).toEqual({
            scriptSetup: true,
            script: false,
            code
        })
    })

    it('Coexist setup', async () => {
        const code = `<script setup name="App"></script> <script></script>`
        expect(parse(code).descriptor).toEqual({
            scriptSetup: true,
            script: true,
            code
        })
    })

    it('Ordinary compileScript', async () => {
        const code = `<script setup name="App" lang="ts"></script>`
        const descriptor = parse(code).descriptor
        expect(compileScript(descriptor).attrs).toEqual({
            name: "App",
            lang: "ts"
        })
    })

    it('Attributes are single quotes', async () => {
        const code = `<script setup name='App' lang='ts'></script>`
        const descriptor = parse(code).descriptor
        expect(compileScript(descriptor).attrs).toEqual({
            name: "App",
            lang: "ts"
        })
    })

    it('Property is preceded by a carriage return symbol', async () => {
        const code = `<script 
        setup 
        name='App' 
        lang='ts'
        ></script>`
        const descriptor = parse(code).descriptor
        expect(compileScript(descriptor).attrs).toEqual({
            name: "App",
            lang: "ts"
        })
    })

    it('Eliminate comment interference', async () => {
        const code = `<script setup name='App' lang='ts'></script>
        <!-- <script></script> -->
        <!-- <script name="BUG" lang="js"></script> -->
        `
        const descriptor = parse(code).descriptor

        expect(descriptor).toEqual({
            scriptSetup: true,
            script: false,
            code
        })

        expect(compileScript(descriptor).attrs).toEqual({
            name: "App",
            lang: "ts"
        })

    })

    it('Interference from other labels', async () => {
        const code = `
        <template lang='pug'></template>
        <script setup name='App' lang='ts'></script>
        <style lang='scss'></style>
        `
        const descriptor = parse(code).descriptor

        expect(descriptor).toEqual({
            scriptSetup: true,
            script: false,
            code
        })

        expect(compileScript(descriptor).attrs).toEqual({
            name: "App",
            lang: "ts"
        })

    })
})
