const ScriptStartRegExp = /[^`'"]*<script[^>]*(.[^>]*?)>/gi;

interface Descriptor {
    scriptSetup: boolean
    script: boolean,
    code: string
}

interface Attrs {
    [key: string]: string | true
}

export function parse(code: string) {
    const descriptor: Descriptor = {
        scriptSetup: false,
        script: false,
        code
    }

    const [...script] = code.matchAll(ScriptStartRegExp)
    
    if (script.length) {
        if (script.length > 1) {
            descriptor.script = true
            descriptor.scriptSetup = true
        } else {
            const [input = ""] = script.at(0) ?? []
            descriptor.scriptSetup = !!~input.indexOf('setup')
        }
    }

    return {
        descriptor
    }
}

export function compileScript(descriptor: Descriptor) {
    const { code } = descriptor
    const [script = ""] = code.match(ScriptStartRegExp) ?? []
    const [...attrs] = script.matchAll(/(?<key>\w[^\r\n\s]+?)=["'](?<value>\w[^\r\n\s]+?)["']/g) ?? []
    
    return {
        attrs: attrs.reduce((acc: Attrs, attr) => {
            const { key, value } = attr.groups ?? {}
            acc[key] = value
            return acc
        }, {})
    }
}
