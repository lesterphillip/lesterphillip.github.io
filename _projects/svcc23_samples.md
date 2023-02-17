---
layout: projects
title: SVCC23 Samples
---

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>SVCC23 Official Samples</title>
    <style>
      body {
        font-family: "Helvetica Neue", Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
      }
      header {
        text-align: center;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
        background-color: #4B3F72;
        color: white;
        margin-bottom: 40px;
      }
      table {
        margin: auto;
        width: 80%;
      }
      th, td {
        padding: 10px;
        text-align: left;
        width: 20%;
      }
      th {
        background-color: #4B3F72;
        color: white;
      }
      div {
          width: 80%;
          padding: 10px;
          margin: auto;
        }
      tbody tr:hover {
        background-color: #eee;
      }
      .main-description {
        padding: 20px;
        background-color: #f9f9f9;
        font-size: 18px;
      }
      .table-description {
        padding: 20px;
        background-color: #4B3F72;
        color: white;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <article>
        <header>
          <h2>Singing Voice Conversion Challenge 2023 Official Samples</h2>
        </header>
      </article>

      <div style="width: 80%" | align="justify">
        This website shows some singing voice conversion samples with two systems using the official SVCC 2023 dataset. We will be providing two source speakers during the evaluation phase (SM1 and SF1) and the goal will be to convert these to the target speakers (IDM1, IDF1, CDM1, CDF1).
        Please note that for this year, the dataset will only be given to registered participants.
        <br>
        You can check out the registration form (free of charge!) and the challenge rules at the official SVCC 2023 website <a href="http://vc-challenge.org">here.</a>
      </div>
  
      <br>

      <div style="width: 80%" | align="justify">
        <h2><u>Baseline System: DiffSVC Official Implementation</u></h2>
        <b>Paper:</b> DiffSVC: A Diffusion Probabilistic Model for Singing Voice Conversion
        <br>        
        <b>Authors:</b> Songxiang Liu, Yuewen Cao, Dan Su, Helen Meng
        <br>
        <a href="https://arxiv.org/abs/2105.13871"> [ArXiv paper]</a> &emsp; <a href="https://liusongxiang.github.io/diffsvc/"> [Official demo]</a>
        <br>
        <br>
        <b>Notes:</b> These samples were provided by the official author.
        </div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Task 1: In-domain conversion</th>
            <th>Sample 1</th>
            <th>Sample 2</th>
            <th>Sample 3</th>
            <th>Sample 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SM1 to IDM1</td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SM_30001.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SM_30002.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SM_30003.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SM_30004.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SF1 to IDM1</td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SF_30001.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SF_30002.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SF_30003.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDM/SF_30004.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SM1 to IDF1</td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SM_30001.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SM_30002.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SM_30003.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SM_30004.wav" type="audio/wav"></audio></td>
          </tr>
        <tr>
          <td>SF1 to IDF1</td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SF_30001.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SF_30002.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SF_30003.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_IDF/SF_30004.wav" type="audio/wav"></audio></td>
        </tr>
        </tbody>
      </table>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Task 2: Cross-domain conversion</th>
            <th>Sample 1</th>
            <th>Sample 2</th>
            <th>Sample 3</th>
            <th>Sample 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SM1 to CDM1</td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SM_30001.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SM_30002.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SM_30003.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SM_30004.wav" type="audio/wav"></audio></td>
          </tr>
          <td>SF1 to CDM1</td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SF_30001.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SF_30002.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SF_30003.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDM/SF_30004.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SM1 to CDF1</td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SM_30001.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SM_30002.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SM_30003.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SM_30004.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SF1 to CDF1</td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SF_30001.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SF_30002.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SF_30003.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/diffsvc/baseline_all_to_CDF/SF_30004.wav" type="audio/wav"></audio></td>
        </tr>
        </tbody>
      </table>

      <br>

      <div style="width: 80%" | align="justify">
        <h2><u>Starter Kit: FastSVC Reimplementation</u></h2>
        <b>Paper:</b> FastSVC: Fast Cross-Domain Singing Voice Conversion with Feature-wise Linear Modulation
        <br>        
        <b>Authors:</b> Songxiang Liu, Yuewen Cao, Na Hu, Dan Su, Helen Meng
        <br>
        <a href="https://arxiv.org/abs/2011.05731"> [ArXiv paper]</a> &emsp; <a href="https://github.com/lesterphillip/SVCC23_FastSVC"> [Github repository]</a>  &emsp; <a href="https://nobody996.github.io/FastSVC/"> [Official demo]</a>
        <br>
        <br>
        <b>Notes:</b> Please note that there are some differences between this reimplementation and the official paper to accommodate 24kHz sampling. You can read more about the changes in the Github repository.
      </div>

    <br>
    <div style="width: 80%" | align="justify">
      <h3>16kHz Samples</h3>
    </div>
    <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Task 1: In-domain conversion</th>
            <th>Sample 1</th>
            <th>Sample 2</th>
            <th>Sample 3</th>
            <th>Sample 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SM1 to IDM1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30001_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30002_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30003_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30004_IDM_gen.wav" type="audio/wav"></audio></td>
          </tr>
        <tr>
          <td>SF1 to IDM1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30001_IDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30002_IDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30003_IDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30004_IDM_gen.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SM1 to IDF1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30001_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30002_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30003_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30004_IDF_gen.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SF1 to IDF1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30001_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30002_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30003_IDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30004_IDF_gen.wav" type="audio/wav"></audio></td>
        </tr>
        </tbody>
      </table>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Task 2: Cross-domain conversion</th>
            <th>Sample 1</th>
            <th>Sample 2</th>
            <th>Sample 3</th>
            <th>Sample 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SM1 to CDM1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30001_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30002_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30003_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30004_CDM_gen.wav" type="audio/wav"></audio></td>
          </tr>
        <tr>
          <td>SF1 to CDM1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30001_CDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30002_CDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30003_CDM_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30004_CDM_gen.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SM1 to CDF1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30001_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30002_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30003_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SM_30004_CDF_gen.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
          <td>SF1 to CDF1</td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30001_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30002_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30003_CDF_gen.wav" type="audio/wav"></audio></td>
          <td><audio controls><source src="/assets/2023svcc/fastsvc16kHz/SF_30004_CDF_gen.wav" type="audio/wav"></audio></td>
        </tr>
        </tbody>
      </table>
      <br>
      <div style="width: 80%" | align="justify">
        <h3>24kHz Samples</h3>
      </div>
      <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Task 1: In-domain conversion</th>
              <th>Sample 1</th>
              <th>Sample 2</th>
              <th>Sample 3</th>
              <th>Sample 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SM1 to IDM1</td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30001_IDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30002_IDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30003_IDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30004_IDM_gen.wav" type="audio/wav"></audio></td>
            </tr>
          <tr>
            <td>SF1 to IDM1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30001_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30002_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30003_IDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30004_IDM_gen.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SM1 to IDF1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30001_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30002_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30003_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30004_IDF_gen.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SF1 to IDF1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30001_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30002_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30003_IDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30004_IDF_gen.wav" type="audio/wav"></audio></td>
          </tr>
          </tbody>
        </table>
  
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Task 2: Cross-domain conversion</th>
              <th>Sample 1</th>
              <th>Sample 2</th>
              <th>Sample 3</th>
              <th>Sample 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SM1 to CDM1</td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30001_CDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30002_CDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30003_CDM_gen.wav" type="audio/wav"></audio></td>
              <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30004_CDM_gen.wav" type="audio/wav"></audio></td>
            </tr>
          <tr>
            <td>SF1 to CDM1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30001_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30002_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30003_CDM_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30004_CDM_gen.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SM1 to CDF1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30001_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30002_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30003_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SM_30004_CDF_gen.wav" type="audio/wav"></audio></td>
          </tr>
          <tr>
            <td>SF1 to CDF1</td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30001_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30002_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30003_CDF_gen.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="/assets/2023svcc/fastsvc/SF_30004_CDF_gen.wav" type="audio/wav"></audio></td>
          </tr>
          </tbody>
        </table>
  </body>
</html>
