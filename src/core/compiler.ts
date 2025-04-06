const ScriptStartRegExp = /[^`'"]*<script[^>]*(.[^>]*?)>/gi;

interface Descriptor {
  scriptSetup: boolean;
  script: boolean;
  code: string;
}

interface Attrs {
  [key: string]: string | true;
}

export function parse(code: string) {
  const descriptor: Descriptor = {
    scriptSetup: false,
    script: false,
    code,
  };

  // Eliminate comment interference
  const codeWithoutComment = code.replace(/<!--[\s\S]*?-->/g, "");

  const [...script] = codeWithoutComment.matchAll(ScriptStartRegExp);

  if (script.length) {
    if (script.length > 1) {
      descriptor.script = true;
      descriptor.scriptSetup = true;
    } else {
      const [input = ""] = script[0] ?? [];
      descriptor.scriptSetup = !!~input.indexOf("setup");
    }
  }

  return {
    descriptor,
  };
}

export function compileScript(descriptor: Descriptor) {
  const { code } = descriptor;

  const dirty = code.match(/(?<!<!--[\s\S]*?--\s*>)<script[\s\S]*?>/g);

  if (!dirty) return { attrs: {} };

  const script = dirty[0];

  const [...attrs] = script.matchAll(
    /(?<key>\w[^\r\n\s]+?)=["'](?<value>\w[^\r\n\s]+?)["']/g
  );

  return {
    attrs: attrs.reduce((original: Attrs, attr) => {
      const { key, value } = attr.groups ?? {};
      original[key] = value;
      return original;
    }, {}),
  };
}
