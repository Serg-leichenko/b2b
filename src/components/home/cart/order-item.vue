<template>
  <div>
    <div class="orders__list">
      <div class="orders__list_block">
        <div class="orders__list_block_comment">
          <p class="comment-text">Комментарий</p>
          <p>
            <textarea
              rows="5"
              cols="45"
              name="text"
              class="comments-input"
            ></textarea>
          </p>
        </div>
        <div class="orders__list_block_user">
          <ul class="orders__list_block_user_list">
            <li class="orders__list_block_user_list_item">Покупатель:</li>
            <li class="orders__list_block_user_list_item">Адрес отгузки:</li>
            <li class="orders__list_block_user_list_item">Дата отгрузки:</li>
            <li class="orders__list_block_user_list_item">Условия оплаты:</li>
          </ul>
          <ul class="orders__list_block_user_who">
            <li class="orders__list_block_user_who_item">Vist-M</li>
            <li class="orders__list_block_user_who_item">
              г. Киев, ул. Большая Васильковская, 65
            </li>
            <li class="orders__list_block_user_who_item">23.08.2021</li>
            <li class="orders__list_block_user_who_item">14 дней</li>
          </ul>
        </div>
      </div>
      <div class="orders__list_block_btn">
        <button type="submit" class="btn-orders">Подтвердить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
