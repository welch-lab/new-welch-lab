---
title: "Welch Lab - Team"
layout: piclay
excerpt: "Welch Lab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

 **The Welch Lab has openings for multiple positions, including Postdoctoral Fellow, PhD Student, Bioinformatician, and Software Engineer!** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**

## Lab
<div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
{% for member in site.data.team_members %}

  <div class="col-8 d-inline-flex flex-column">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid d-inline-block w-50" />
  <div class="col flex-fill ml-0 pl-0 pr-6">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="margin: 0; padding: 0; font-size: 14px">

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

{% endfor %}

</div>

## Alumni

<div class="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
{% for member in site.data.alumni_members %}

  <div class="col-6 clearfix float-left">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid d-inline-block w-50" />
  <div class="col flex-fill ml-0 pl-0 pr-6">
  <h4>{{ member.name }}</h4>
  <i>{{ member.duration }} <br> Role: {{ member.info }}</i>
</div>
</div>


{% endfor %}

</div>

