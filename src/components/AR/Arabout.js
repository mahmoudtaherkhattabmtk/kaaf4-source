import React from "react";
import "./arabout.css";
import "./arfacts.css";
import Arside from "./Arside";
const Arbout = () => {
  return (
    <div className="arContainer">
      <Arside />
      <div class="section arabout-section bounce-right">
        <h1 className="decore">من نحن.</h1>
        <h1> <i className="fa fa-hand-o-left"> </i> من نحن </h1>
        <p>
          <b>رؤيتنا</b>
          <hr />
          ان نكون الشركة القائدة اللتي تقوي وتدعم الشباب الخريجين الحديثين من خلال برامج التدريب المميزة للانخراط بسهولة ويسر في سوق العمل.          </p>
        <p>
          <b>مهمتنا</b>
          <hr />
          تزويد الخريجين الحديثين بالمهارات التقنية والعملية المطلوبة لسوق العمل, من خلال التدريبات عالية الجودة والمكونة خصيصاً من أجل تلبية إحتياجاتهم.
        </p>
        <div className="hire-me">
          <i className="fa fa-file-image-o"></i>
          <span>
            سنوات عديدة في هذا المجال
            <br />
            مع أكثر من 100 مشروع تم بنجاح!
          </span>
          <span>
            <i className="fa fa-whatsapp"></i> <a href="https://wa.me/201150666224">تواصل معنا</a>
          </span>
        </div>

        <h1> <i className="fa fa-hand-o-left"></i> ما الذي نفعله </h1>
        <div className="skills-box">
          <h3>
            <i className="fa fa-code"></i> المهارات التقنية
          </h3>
          <b>تطوير المهارات التقنية للخريجين الحديثين في مجالات مختلفة , مثل البرمجة وتحليل البيانات وغيرها.</b>
          <p>+ الفوتوشوب</p>
          <p>+ الستراتور</p>
          <p>+ تعليم البرمجة</p>
          <p>+ ...</p>
        </div>
        <div className="skills-box">
          <h3>
            <i className="fa fa-cogs"></i> الخبرة العملية
          </h3>
          <b>مساعدة وتطوير الخريجين الحديثين من خلال المهارات العملية والتدريبات وذلك تحت الإشراف والمراقبة .
          </b>
          <p>+ المعدات</p>
          <p>+ المعامل</p>
          <p>+ الخبراء</p>
          <p>+ ...</p>
        </div>
        <div className="skills-box">
          <h3>
            <i className="fa fa-user"></i> المهارات الشخصية
          </h3>
          <b>تحسين المهارات الشخصية للخريجين الحديثين من خلال مهارات التواصل مع الآخرين والعمل الجماعي والتفكير النقدي.</b>
          <p>+ العمل الجماعي</p>
          <p>+ مهارات التواصل</p>
          <p>+ مهارات العرض</p>
          <p>+ ...</p>
        </div>
      </div>
    </div>
  );
};

export default Arbout;
