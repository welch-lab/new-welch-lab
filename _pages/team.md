---
title: "Welch Lab - Team"
layout: gridlay
excerpt: "Welch Lab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

 **The Welch Lab has openings for multiple positions, including Postdoctoral Fellow, PhD Student, Bioinformatician, and Software Engineer!** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**

## Lab
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
{% for member in site.data.team_members %}

<div class="col mx-auto">
  <div class="row">
  <div class="col-6 clearfix float-left">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid d-inline-block w-100" />
  </div>
  <div class="col-8 mr-auto w-100">
  <h4 class="text-nowrap">{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
  </div>
  </div>
</div>

{% endfor %}

</div>

## Alumni

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
{% for member in site.data.alumni_members %}

<div class="col mx-auto">
  <div class="row">
  <div class="col-6 clearfix float-left">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid d-inline-block w-100" />
  </div>
  <div class="col-8 mr-auto w-100">
  <h4 class="text-nowrap">{{ member.name }}</h4>
  <i>{{ member.duration }} <br> Role: {{ member.info }}</i>
  <ul style="overflow: hidden">

  </ul>
</div>
</div>
</div>


{% endfor %}

</div>

