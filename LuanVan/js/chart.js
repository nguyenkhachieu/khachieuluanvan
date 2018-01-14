$(document).ready(function() {
  var dataContent = $('[data-content=list-content]'),
    dataTab = $('[data-tab=list-tabs]');
    dataContent.find('.block').addClass('hidden');
    dataContent.find('.block').first().removeClass('hidden');
    dataTab.find('li').first().addClass('active');
    dataTab.find('li').click(function() {
      var idx = $(this).index();
      dataTab.find('[data-tab=tabs-' + idx + ']').addClass('active');
      dataTab.find('[data-tab=tabs-' + idx + ']').siblings().removeClass('active');
      dataContent.find('.block').addClass('hidden');
      dataContent.find('[data-content=content-' + idx + ']').removeClass('hidden');
    });
});