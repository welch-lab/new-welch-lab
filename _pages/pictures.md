---
title: "Welch Lab - Pictures"
layout: piclay
excerpt: "Welch Lab -- Pictures"
permalink: /pictures/
---

# Pictures

#### Welch Lab Gallery
(Right-click *'view image'* to see a larger image.)
{% assign number_printed = 0 %}
{% for pic in site.data.pictures_Leiden %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>

#### Department of Computational Medicine and Bioinformatics](https://ccmb.med.umich.edu):
<iframe width="560" height="315" src="https://www.youtube.com/embed/cpwvgQShFq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

From the [2018 DCMB Retreat](http://ccmb.med.umich.edu).
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/2018-DCMB.jpg" width="60%">
</figure>


