import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    desktop_main_menu_slot: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'first_logo',
            type: DIRECT_PLUGIN,
            priority: 10,
            RenderWidget: () => (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '20px'
              }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
                  alt="First Logo"
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>
            ),
          },
        },
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'second_logo',
            type: DIRECT_PLUGIN,
            priority: 90,
            RenderWidget: () => (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px'
              }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/200px-Typescript_logo_2020.svg.png"
                  alt="Second Logo"
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>
            ),
          },
        },
      ]
    },
  },
};

export default config;