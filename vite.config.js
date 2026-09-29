import { defineConfig, loadEnv } from "vite";

const mapsModulePattern = /nixc6dzd0q4kgyji8e6kqzkazg3v3v1i1t_4-ejunjw/i;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      {
        name: "inject-google-maps-key",
        transform(code, id) {
          if (!mapsModulePattern.test(id)) return null;
          const key = env.VITE_GOOGLE_MAPS_API_KEY;
          if (!key) return null;
          return code.replace(/Tr=`AIza[^`]*`/, `Tr=${JSON.stringify(key)}`);
        },
      },
    ],
  };
});
