---
title: "Welch Lab - Publications"
layout: gridlay
excerpt: "Welch Lab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

## Group highlights

(For a full list of publications see [below](#full-list-of-publications) or go to [PubMed](https://pubmed.ncbi.nlm.nih.gov/?term=welch%2C+joshua+D&sort=pubdate), [Google Scholar](https://scholar.google.com/citations?user=T0lZoYgAAAAJ&hl=en), or [Michigan Experts](https://experts.umich.edu/discover/experts_publication?and_facet_profiles_author=5597))

<div class="row row-cols-1 row-cols-xl-2">
{% for publi in site.data.publist %}
{% if publi.highlight == 1 %}

<div class="col mb-4">

 <div class="card h-100 d-flex flex-column justify-content-between bg-light" >
  <div class="card-body clearfix">
  <pubtit class="card-title">{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-fluid float-left w-33 d-inline-block"/>
  <p class="card-text">{{ publi.description }}</p>
  <p class="card-text"><em>{{ publi.authors }}</em></p>
  <p class="card-text text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p class="card-text"> {{ publi.news2 }}</p>
  </div>
  <div class="card-footer px-0 mx-auto text-center w-100">
  <p class="card-link text-nowrap"><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  </div>
 </div>
</div>

{% endif %}
{% endfor %}
</div>

<p> &nbsp; </p>

## Full List of publications

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}
