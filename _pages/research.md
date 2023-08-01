---
title: "Welch Lab - Research"
layout: gridlay
excerpt: "Welch Lab -- Research."
sitemap: false
permalink: /research/
---
# Welch Lab Research Focus

<p>Our research aims to address fundamental problems in both biomedical research and computer science by developing new tools tailored to rapidly emerging high-throughput sequencing technologies. Broadly, we seek to understand what genes define the complement of cell types and cell states within healthy tissue, how cells differentiate to their final fates, and how dysregulation of genes within specific cell types contributes to human disease. As computational method developers, we seek to both employ and advance the methods of machine learning, particularly for unsupervised analysis of high-dimensional data.</p>

<p>Most recently, I have focused on developing open-source software for the processing, analysis, and modeling of single-cell sequencing data. Key contributions in this area include SLICER, an algorithm for inferring developmental trajectories; LIGER, a general approach for integrating single-cell transcriptomic, epigenomic and spatial transcriptomic data; and online iNMF, a scalable and iterative algorithm for single-cell data integration. I have applied these methods in collaboration with biological scientists to study stem cell differentiation, somatic cell reprogramming, and the brain.</p>

## Research highlights

<div class="row row-cols-1 row-cols-xl-2">
{% for publi in res %}
{% if publi.highlight == 1 %}


<div class="col mb-4">
 <div class="card h-100 d-flex flex-column justify-content-between bg-light" >
  <div class="card-body clearfix">
  <pubtit class="card-title">{{ publi.title }}</pubtit>
  <p>
  <img src="{{'/images/pubpic/' | url }}/{{ publi.image }}" class="img-fluid w-33 float-start d-inline-block" />
  </p>
  <p class="card-text" style="font-size: 14px">{{ publi.description }}</p>
  </div>
 </div>
</div>

{% endif %}
{% endfor %}

</div>

<p> &nbsp; </p>
