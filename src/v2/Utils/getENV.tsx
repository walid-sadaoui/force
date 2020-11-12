import { GlobalData, data as sd } from "sharify"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export function getENV(ENV_VAR: keyof GlobalData) {
  let envVar
  if (typeof window === "undefined") {
    envVar = process.env[ENV_VAR]
  } else {
    if (publicRuntimeConfig[ENV_VAR]) {
      envVar = publicRuntimeConfig[ENV_VAR]
    } else {
      envVar = sd[ENV_VAR]
    }
  }

  return envVar
}
