---
title: "Welch Lab - Research"
layout: gridlay
excerpt: "Welch Lab -- Research."
sitemap: false
permalink: /research/
---
# Welch Lab Research Focus
<p>
Our research aims to address fundamental problems in both biomedical research and computer science by developing new tools tailored to rapidly emerging high-throughput sequencing technologies. Broadly, we seek to understand what genes define the complement of cell types and cell states within healthy tissue, how cells differentiate to their final fates, and how dysregulation of genes within specific cell types contributes to human disease. As computational method developers, we seek to both employ and advance the methods of machine learning, particularly for unsupervised analysis of high-dimensional data.

Most recently, I have focused on developing open-source software for the processing, analysis, and modeling of single-cell sequencing data. Key contributions in this area include SLICER, an algorithm for inferring developmental trajectories; LIGER, a general approach for integrating single-cell transcriptomic, epigenomic and spatial transcriptomic data; and online iNMF, a scalable and iterative algorithm for single-cell data integration. I have applied these methods in collaboration with biological scientists to study stem cell differentiation, somatic cell reprogramming, and the brain.</p>

## Resarch highlights

{% assign number_printed = 0 %}
{% for publi in site.data.res %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>
