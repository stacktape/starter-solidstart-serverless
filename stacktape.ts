import { SolidStartWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new SolidStartWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
