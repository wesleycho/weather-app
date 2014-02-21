from django.conf.urls import patterns, include, url
from weather import views, api

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'weather.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/weather/get', api.get, name='get'),
    url(r'^api/weather/autocomplete', api.autocomplete, name='autocomplete'),
    url(r'^', views.index, name='index'),
)
