<template>
    <div>
    <v-navigation-drawer
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-reorder-horizontal</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Меню</v-list-item-title>
          </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-rabbit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Личный кабинет</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-message-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Плановые отключения</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Контакты и реквизиты</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'MyNavigationDrawer',
  data () {
    return {
        msg: "MyNavigationDrawer"
    }
  }
}
</script>