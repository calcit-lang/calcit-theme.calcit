
import { main_BANG_ } from "./js-out/calcit-theme.main.mjs"

main_BANG_()

if (import.meta.hot) {
  import.meta.hot.accept('./js-out/calcit-theme.main.mjs', (main) => {
    main.reload_BANG_()
  })
}
