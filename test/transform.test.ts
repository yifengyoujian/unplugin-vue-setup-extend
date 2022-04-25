import { describe, expect, it } from 'vitest'
import transform from '../src/core/transform'

describe('transform', () => {
  it('transform script setup', async () => {
    const code = `<script setup lang="ts" name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

  it('transform script', async () => {
    const code = `<script lang="ts" name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })

  it('transform script js', async () => {
    const code = `<script setup name="App">// placeholder </script>`

    expect(transform(code, 'App.vue')).toMatchSnapshot()
  })
})
