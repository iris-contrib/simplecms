<template>
  <div>
    menu
    <tree
                ref='tree'
                :treeData="treeData"
                :options="options"
                @node-click="itemClick"

        />

  </div>
</template>

<script>
export default {
  layout: 'admin',
  head: {
    title: '标题',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', integrity: 'sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb', crossorigin: 'anonymous' }
    ]
  },
  mounted: function () {
  },
  methods: {
    itemClick (node) {
      console.log(node.key)
    },
    loader (node, resolve) {
      setTimeout(() => {
        if (node.data.label === '建邺区') {
          resolve([{
            label: '南湖街道',
            children: []
          }, {
            label: '奥体',
            children: []
          }])
        } else {
          resolve([])
        }
      }, 3000)
    },
    changed (checked) {
      this.checked = checked.map((c) => {
        return c.label
      }).join(', ')
    }
  },
  data () {
    return {
      options: {
        showCheckbox: false,
        halfCheck: false,
        lazy: true,
        load: this.loadingChild,
        showSearch: false,
        search: {
          useInitial: true,
          useEnglish: false,
          customFilter: null
        }
      },
      treeData: [],
      data: [{
        label: '江苏',
        children: [{
          label: '南京',
          children: []
        }]
      }, {
        label: '浙江',
        children: [{
          label: '杭州',
          children: [{
            label: '建邺区',
            isChecked: true,
            children: []
          }]
        }]
      }],
      checked: '',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {}
}
</script>


