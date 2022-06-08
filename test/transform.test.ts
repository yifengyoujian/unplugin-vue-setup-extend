import { describe, expect, it } from 'vitest'
import transform from '../src/core/transform'

describe('transform', () => {
  it('transform script', async () => {
    const code = `<script setup name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

  it('Add lang attributes quickly to transformed code', async () => {
    const code = `<script setup lang="ts" name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

  it('If there is a script that does not convert', async () => {
    const code =
      `<script lang="ts">// placeholder </script>
       <script lang="ts" setup name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

  it('Do not convert if there is an error in the script', async () => {
    const code =`<script lang="ts" setup name="App">()()()</script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

})
